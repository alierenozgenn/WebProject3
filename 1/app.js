const mysql2 = require('mysql2');

// MySQL bağlantısını oluştur
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'aeren', 
  password: 'alieren', 
  database: 'web' 
});

connection.query('DROP TABLE IF EXISTS Employee', (err, result) => {
  if (err) throw err;
  console.log('Employee tablosu silindi');

  // Burada tabloyu tekrar oluşturun ve veri ekleme işlemini gerçekleştirin.
  const createTableQuery = `
    CREATE TABLE Employee (
      EmployeeId INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      DepartmentName VARCHAR(50)
    )
  `;
  connection.query(createTableQuery, (err) => {
      if (err) throw err;
      console.log('Employee tablosu oluşturuldu');

      // Veriyi ekleyin
      const insertDataQuery = `
        INSERT INTO Employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES
        (1, 'Ken', 'Sanchez', 'Executive'),
        (2, 'Terri', 'Duffy', 'Engineering'),
        (3, 'Roberto', 'Tamburello', 'Engineering'),
        (4, 'Rob', 'Walters', 'Engineering'),
        (5, 'Gail', 'Erickson', 'Engineering'),
        (6, 'Jossef', 'Goldberg', 'Engineering'),
        (7, 'Dylan', 'Miller', 'Support'),
        (8, 'Diane', 'Margheim', 'Support'),
        (9, 'Gigi', 'Matthew', 'Support'),
        (10, 'Gina', 'Raheem', 'Support')
      `;
      connection.query(insertDataQuery, (err) => {
          if (err) throw err;
          console.log('Veriler Employee tablosuna eklendi');

      // Engineering departmanındaki çalışanları listele
      const queryEngineering = `SELECT * FROM Employee WHERE DepartmentName = 'Engineering'`;
      connection.query(queryEngineering, (err, results) => {
        if (err) throw err;
        console.log("Engineering departmanındaki çalışanlar:", results);

        // Terri'nin departmanını Executive olarak güncelle
        const updateTerri = `UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'`;
        connection.query(updateTerri, (err, result) => {
          if (err) throw err;
          console.log("Terri'nin departmanı Executive olarak güncellendi");

          // Güncellemeyi doğrula
          const checkUpdate = `SELECT * FROM Employee WHERE FirstName = 'Terri'`;
          connection.query(checkUpdate, (err, results) => {
            if (err) throw err;
            console.log("Terri için güncellenmiş kayıt:", results);

            // Bağlantıyı kapat
            connection.end((err) => {
              if (err) throw err;
              console.log('Bağlantı kapatıldı');
            });
          });
        });
      });
    });
  });
});
