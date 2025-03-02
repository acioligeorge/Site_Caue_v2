from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
    template_folder='.',  # Use current directory for templates
    static_folder=None  # Disable default static folder to handle it manually
)

# Serve front/src/general_style.css
@app.route('/front/src/general_style.css')
def serve_css():
    return send_from_directory(os.path.join(os.path.dirname(os.path.dirname(app.root_path)), 'front', 'src'), 'general_style.css')

@app.route('/admin/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
