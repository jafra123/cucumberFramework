Feature: Test Facebook smoke scenario

#Scenario: Test login with valid credentials
#Given open chrome and start applciation
#When i enter valid username and password 
# From  Mukesh videos


#Then user shoul be able to login succesfully


#Scenario: Test login with valid credentials
#Given open chrome and start applciation
#When i enter valid "jafra@gmail.com" and "canada123" 
#Then user shoul be able to login succesfully

Scenario Outline: Test login with valid credentials
Given open chrome and start applciation
When i enter valid "<username>" and "password" 
Then user shoul be able to login succesfully

Then application should be closed

Examples:
| username            | password |
| jafrasman@gmail.com | canada123|
#| manmohan@gmail.com  | canada123|
#| jafrasman@gmail.com | canada123|

