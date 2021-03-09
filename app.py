from flask import Flask, render_template

app = Flask(__name__)

@app.route("/signup")
def index():
    return render_template("signup/index.html")

#debug mode
if __name__ == "__main__":
    app.run(debug=True)