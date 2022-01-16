Feature: Show trips
  User can see all trips when visit on homepage

  Scenario: Show all trips
    Given I visit on the homepage
    Then I should see 10 trips

  Scenario: Show trips that has keyword from url query
    Given I visit on the homepage
    Then I should see "ร้านกาแฟ" in search field
    And I should see 2 trips result of "ร้านกาแฟ"

  Scenario: Open link on new tab when click trip name
    Given I visit on the homepage
    Then I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"
    When I click "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"
    Then I should see the new tab of that trip

  Scenario: Open link on new tab when click read more
    Given I visit on the homepage
    Then I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"
    And I should see "อ่านต่อ" on trip description
    When I click "อ่านต่อ"
    Then I should see the new tab of that trip