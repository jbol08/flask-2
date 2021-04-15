from flask import Flask, render_template,request,jsonify
import random
import requests

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num', methods=['POST'])
def lucky_number():
    '''form information entered by a user'''
    name = request.json.get('name')
    email = request.json.get('email')
    year = request.json.get('year')
    color = request.json.get('color')

    errors = {}

    if not name:
        errors['name'] = ['Must enter name']

    if not email:
        errors['email'] = ['Must enter email']

    if not year:
        errors['year'] = ['Must enter a 4 digit number']

    if not color:
        errors['color'] = ['Must enter a color name']

    else:
        try:
            year = int(year)
            if year < 1900 or year > 2000:
                errors['year'] = ['Must be 4 digit number between 1900 and 2000']
        except ValueError:
            errors['year'] = ['Please enter a numeric value']
    if errors:
        return jsonify(errors=errors)
                
    lucky_nums = {}
    num = random.randint(1, 100)
    year_facts = requests.get(f'http://numbersapi.com/{year}/year')
    year_text = year_facts.text
    num_facts = requests.get(f'http://numbersapi.com/{num}')
    num_text = num_facts.text
    lucky_nums['year'] = {'fact': year_text, 'year': year}
    lucky_nums['num'] = {'fact':num_text,'num':num}

        
    return jsonify(lucky_nums)
