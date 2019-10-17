class Employee < ApplicationRecord
  belongs_to :dog

  validates :first_name, :last_name, presence: true, uniqueness: true
  validates :title, :alias, presence: true, uniqueness: true

  def to_s
    self.first_name + " " + self.last_name
  end

  def dog_name
    self.dog.name
  end

end
