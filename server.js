// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchRoute = require('./searchRoute');

const app = express();
const PORT = 3000;

// Dummy data for illustration purposes
const searchData = [
    {
        "range": "Sheet1!A1:Z1000",
        "majorDimension": "ROWS",
        "values": [
          [
            "S.no",
            "Name",
            "Husband Name/Father Name",
            "Age",
            "Caste",
            "Aadhar Card No",
            "Cell No",
            "Team Leader",
            "Status"
          ],
          [
            "1",
            "Katakam Sunitha",
            "K Ashok",
            "51",
            "BC",
            "518853881832",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "2",
            "Pinjarla Vijaya Lakshmi",
            "Pinjarla Krishna",
            "60",
            "",
            "600224484993",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "3",
            "Pinjarla Laxmi Devi",
            "Pinjarla Sudharshan",
            "26",
            "",
            "923508299476",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "4",
            "Bade Rajitha",
            "Bade Srinivas",
            "35",
            "",
            "238013745235",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "5",
            "Bade Srinivas",
            "Bade Rajaiah",
            "40",
            "",
            "514353905942",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "6",
            "Makkala Yashoda",
            "Late Makkala Narayana",
            "48",
            "",
            "609800117481",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "7",
            "Silam Swapna",
            "S Samual",
            "32",
            "Bc",
            "980242776118",
            "9966560952",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "8",
            "Kummari Sangeetha",
            "K Sailu",
            "45",
            "Bc",
            "247260629746",
            "9502978119",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "9",
            "Dharshanam Jayamma",
            "Sandapaka Buchaiah",
            "52",
            "",
            "731859997708",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "10",
            "Katakam Naveen Kumar",
            "",
            "",
            "",
            "764709794097",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "11",
            "Nellutla Deepa",
            "Nellutla Anjaiah",
            "",
            "",
            "641614518101",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "12",
            "Vangari Ganesh",
            "Katakam Ashok",
            "",
            "",
            "211636389390",
            "",
            "Katakam Ashok",
            "Application under process"
          ],
          [
            "13",
            "Katakam Ashok",
            "Katakam Dashrath",
            "60",
            "",
            "699440222141",
            "",
            "Katakam Ashok",
            "Application under process"
          ]
        ]
      }
];

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('Request headers:', req.headers);
    const apiKey = req.headers.authorization;
    console.log('Received API Key:', apiKey);

    if (apiKey === 'AIzaSyCYge6cXhLuz3iSoP2UAxahosMBMkjJcWI') {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
}
)

app.use('/api', searchRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
