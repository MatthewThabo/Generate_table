
function myFunction() {
              var x = document.getElementById("yesone");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
            }

            function sortTable() {
              let table = document.getElementById("myTable");

              let rowsCollection = table.querySelectorAll("tr");

              let rows = Array.from(rowsCollection)
                .slice(1);

              shuffleArray(rows);

              for (const row of rows) {
                table.appendChild(row);
              }
            }

            function shuffleArray(array) {
              for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
            }