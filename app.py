from flask import Flask, render_template
import pymysql

app = Flask(__name__)

#signup
@app.route("/signup")
def signup():
    return render_template("signup/index.html")

@app.route("/signup/upload")
def signup_upload():
    #load db password
    with open("dbpw.txt", "r") as f:
        dbpw = f.read()

    return dbpw

#debug mode
if __name__ == "__main__":
    app.run(debug=True)