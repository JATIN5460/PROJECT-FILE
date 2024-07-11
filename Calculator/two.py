valid_passwords = ['password123', 'securepassword', 'letmein']

def check_password(password):
    for valid_password in valid_passwords:
        if password == valid_password:
            return True
    return False

password_input = input("Enter your password: ")

if check_password(password_input):
    print("Access granted!")
else:
    print("Access denied!")
