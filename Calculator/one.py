val_passwords=["newPass","thisPass","GRANTED"]
def check_pass(password):
    for valid_password in val_passwords:
        if password==valid_password:

            return True 
             
        return False
    

    pass_this=str(input("enter the password"))
    #using the if else to determine th epassword would be granted or not
    if(check_pass(pass_this)):
        print("access granted")

    else:
        print("Denied")