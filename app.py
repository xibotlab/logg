from flask import Flask, render_template

app = Flask(__name__)

#signup
@app.route("/signup")
def signup():
    return render_template("signup/index.html")

#@app.route("/signup/upload")
#def 

#debug mode
if __name__ == "__main__":
    app.run(debug=True)