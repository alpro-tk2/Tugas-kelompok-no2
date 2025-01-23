document.addEventListener("DOMContentLoaded", () => {
  const nimInput = document.getElementById("nim");
  const nameInput = document.getElementById("name");
  const facultyInput = document.getElementById("faculty");
  const programInput = document.getElementById("program");
  const addButton = document.getElementById("addButton");
  const resetButton = document.getElementById("resetButton");
  const attendanceList = document.getElementById("attendanceList");

  let studentCount = 0;

  // Tambahkan Mahasiswa ke Daftar
  addButton.addEventListener("click", () => {
    const nim = nimInput.value.trim();
    const name = nameInput.value.trim();
    const faculty = facultyInput.value.trim();
    const program = programInput.value.trim();

    if (!nim || !name || !faculty || !program) {
      alert("Semua kolom harus diisi!");
      return;
    }

    studentCount++;
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${studentCount}</td>
        <td>${nim}</td>
        <td>${name}</td>
        <td>${faculty}</td>
        <td>${program}</td>
        <td><span class="delete-btn">❌</span></td>
      `;

    // Hapus Baris
    row.querySelector(".delete-btn").addEventListener("click", () => {
      row.remove();
      updateRowNumbers();
    });

    attendanceList.appendChild(row);

    // Kosongkan input setelah ditambahkan
    nimInput.value = "";
    nameInput.value = "";
    facultyInput.value = "";
    programInput.value = "";
  });

  // Reset Daftar Hadir
  resetButton.addEventListener("click", () => {
    if (confirm("Yakin ingin mereset daftar hadir?")) {
      attendanceList.innerHTML = "";
      studentCount = 0;
    }
  });

  // Perbarui Nomor Urut
  function updateRowNumbers() {
    const rows = attendanceList.querySelectorAll("tr");
    studentCount = rows.length;
    rows.forEach((row, index) => {
      row.querySelector("td:first-child").textContent = index + 1;
    });
  }
});
