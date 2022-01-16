Feature: Show trips
  User can see all trips when visit on homepage

  Scenario: Show all trips
    Given I visit on the homepage
    Then I should see 10 trips

  Scenario: Show trips that has keyword from url query
    Given I visit on the homepage with search keyword
    Then I should see "ร้านกาแฟ" in search field
    And I should see 2 trips result of "ร้านกาแฟ"

  Scenario: Open link on new tab when click trip name
    Given I visit on the homepage
    Then I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"
    And I can click "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"

  Scenario: Open link on new tab when click read more
    Given I visit on the homepage
    Then I should see "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว"
    And I should see "อ่านต่อ" on trip description
    And I can click "อ่านต่อ"