Feature: Free CRM Create deals


# 
Scenario: Free CRM Create a new deals
Given User is already on login page
When title of login page is Free CRM
Then user enters username and password
| jafra123 | canada123 |

Then user clicks on login button
Then user is on home page
Then user move to new deal page
# below data is only for this line
Then user enters deal detail        
|test deal | 1000 | 50 | 10 |

Then close the browser

