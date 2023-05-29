const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Parse JSON requests
app.use(bodyParser.json());

// Parse URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));


const buildPath = path.join(__dirname, '.', 'build');

// Serve static files from the build directory
app.use(express.static(buildPath));

// Configure fallback routing
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


  

app.post('/submit-form', (req, res) => {
  const { projectName, teamMembers, projectDescription, stakingDetails, projectWebsite } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'testerola16@gmail.com',
      pass: 'anhndmltmohphilm',
    },
  });

  const message = {
    from: 'testerola16@gmail.com',
    to: 'olamideisreal5@gmail.com',
    subject: 'New Stake Pool Listing Form Submission',
    html: `
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333333;
          margin: 0;
          padding: 20px;
        }
  
        h1 {
          color: #22647b;
          font-size: 24px;
          margin-bottom: 20px;
        }
  
        p {
          margin: 0 0 10px;
        }
  
        strong {
          font-weight: bold;
        }
  
        .container {
          background-color: #ffffff;
          border-radius: 5px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
  
        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
        }
      </style>
      <body>
        <div class="container">
          <h1>Stake Pool Listing Form Submission</h1>
          <p><strong>Project Name:</strong> ${projectName}</p>
          <p><strong>Team Members:</strong> ${teamMembers}</p>
          <p><strong>Project Description:</strong> ${projectDescription}</p>
          <p><strong>Staking Details:</strong> ${stakingDetails}</p>
          <p><strong>Project Website:</strong> ${projectWebsite}</p>
        </div>
        <p class="footer">This email was sent from the RewardPools.io.</p>
      </body>
    `,
  };
  

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error Sending Mail');
    } else {
      console.log('Email sent: ', info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
