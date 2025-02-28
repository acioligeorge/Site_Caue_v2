from flask import Flask, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'your_password'  # Replace with your password
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@gmail.com'  # Replace with your email

mail = Mail(app)

@app.route('/send', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = Message(subject='New Contact Form Submission',
                  recipients=['your_email@gmail.com'],  # Replace with your email
                  body=f'Name: {name}\nEmail: {email}\nMessage: {message}')
    mail.send(msg)

    return 'Email sent!', 200

if __name__ == '__main__':
    app.run(debug=True)
