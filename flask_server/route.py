# from flask import Blueprint, request, jsonify, render_template
# from model import MyUser, db

# user_route = Blueprint('user_route', __name__)



# # @user_route.route('/select_all', methods=['GET'])
# # def select_all_user():
# #     select_user = MyUser.query.all()

# #     if not select_user:
# #         return jsonify({"error": "User does not exist"}), 404

# #     user_list = [
# #         dict(id=user.id, password=user.password, user=user.user, phone_num=user.phone_num) for user in select_user
# #     ]
    
# #     return jsonify(user_list)

# @user_route.route('/',methods=['GET','POST'])
# def login():
#     msg = ''
#     login = request.get_json(silent=True)
#     select_user = MyUser.query.all()
#     user_list = [
#         dict(id=user.id, password=user.password, user=user.user, phone_num=user.phone_num) for user in select_user
#     ]
#     print(login["id"]+login["password"], user_list[1]["id"]+user_list[1]["password"])
#     if login["id"]+login["password"] == user_list[1]["id"]+user_list[1]["password"]:
#         return 'Logged in successfully!'
#     else:
#         msg = 'Incorrect username/password!'

#     return render_template('/login', msg=msg)

from flask import Blueprint, request, jsonify
from model import MyUser, db

user_route = Blueprint('user_route', __name__)

@user_route.route('/', methods=['POST'])
def login():
    try:
        # JSON 데이터 받기
        login_data = request.get_json()
        id = login_data.get('id')
        password = login_data.get('password')

        # 데이터베이스에서 사용자 조회
        user = MyUser.query.filter_by(id=id, password=password).first()

        if user:
            # 로그인 성공 시 JSON 응답
            return jsonify(message='Logged in successfully!'), 200
        else:
            # 로그인 실패 시 JSON 응답
            return jsonify(message='Incorrect username/password!'), 401

    except Exception as e:
        print(e)
        # 서버 오류 시 JSON 응답
        return jsonify(message='Server error'), 500
