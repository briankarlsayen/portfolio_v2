export const sendMail = async (email: string) => {
  const url = 'https://chat-app-server.fly.dev/global/sendmail';
  const data = {
    to: 'blu3fire89@gmail.com',
    from: 'Portfolio_v2',
    subject: 'Get in touch',
    body: `Email ${email} has contacted you through your portfolio https://briansayen.netlify.app.`,
    type: 'default',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json(); // Assuming the server responds with JSON data
    console.log('Response data:', responseData);
  } catch (error) {
    console.error('Error:', error);
    // Handle errors here
  }
};
