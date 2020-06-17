class ContactsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @contact = Contact.new()
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.general_message(@contact).deliver_now
      redirect_to root_path
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone, :message)
  end
end
