from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num', methods=['POST'])
def lucky_number():
    '''form information entered by a user'''
    data = request.json
    user = User(
        name=data['name'],
        email=data['email'],
        year=data['year'],
        color=data['color'])

    db.session.add(user)
    db.session.commit()

    return render_template('index.html')