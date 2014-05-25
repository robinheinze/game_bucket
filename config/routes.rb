GameBucket::Application.routes.draw do
  root :to => 'application#index'
  resources :games, :except => [:new, :edit]
end
