class Contact < ApplicationRecord
  validates :message, presence: true
  validates :name, presence: true
  validates :email,
    :presence => :true,
    :format => {
      :with => /\S+@\S+\.\S+/i,
      :message => "le format de l'adresse e-mail doit être correct."
    }
  validates :phone, presence: true
    # :format => {
    #   :with => /(0|\+33[\s-]?)[1-9][\s-]?(\d{2}[\s-]?){4}^/,
    #   :message => "votre n° de téléphone est mal renseigné."
    # }
end
