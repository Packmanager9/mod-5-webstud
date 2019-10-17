class Dog < ApplicationRecord
  has_many :employees

  validates :name, presence: true, uniqueness: true
  validates :breed, :age, presence: true
end
