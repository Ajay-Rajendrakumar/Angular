from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'  
@app.route('/hello/<name>')
@cross_origin()
def hello_name(name):
      return 'Hello %s!' % name

@app.route('/login',methods=['GET','POST'])
@cross_origin()
def login():
      user= request.get_json()

      print(user.get('name'))
      response_content={
         "status":200,
         "data":"success login bitch"
      }
      return jsonify(response_content)
  
if __name__ == '__main__':
   app.run()