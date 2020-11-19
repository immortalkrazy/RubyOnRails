Rails.application.routes.draw do
  root to: "welcome#home"
  get 'welcome/home'
  namespace 'api' do
    namespace 'v1' do
      resources :jobs
    end
  end  
end