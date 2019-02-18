Feature: Free CRM Create Contacts


# with exaples keyword
Scenario Outline: Free CRM Create a new Contact
Given User is already on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user move to new contact page
Then user enters contact detail"<firstname>" and "<lastname>" and "<postition>"

Then close the browser

Examples:
	| username | password | firstname | lastname | postition|
	| jafra123 | canada123| Tom       | Peter    | Manager  |	
	| jafra123 | canada123| David     | Dasouza  | Director |	
		

