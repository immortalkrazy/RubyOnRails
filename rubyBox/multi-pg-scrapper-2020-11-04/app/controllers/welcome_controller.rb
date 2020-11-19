class WelcomeController < ApplicationController
  def home
    @jobs = Job.all.limit(5)
  end
end
