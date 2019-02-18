Feature: Free CRM Login Feature
# no paramatrization hard coded valu

#Scenario: Free CRM Login Test Scenario
#Given User is already on login page
#When title of login page is Free CRM
#Then user enters username and password
#Then user clicks on login button
#Then user is on home page




#Scenario: Free CRM Login Test Scenario
#Given User is already on login page
#When title of login page is Free CRM

#Then user enters "jafra123" and "canada123"
#Then user clicks on login button
#Then user is on home page


# with exaples keyword
Scenario Outline: Free CRM Login Test Scenario
Given User is already on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
	| username | password |
	| jafra123 | canada123|
	| tom      | test456  |
	| man	   | manm1    |	






#Scenario: user is able to create a new contact
#Given user is already on home page 
#When user mouse hover on contact link
#Then user click on new contact link
#Then user enters firstname and lastname
#Then user clicks on save button 
#Then verify new contact created