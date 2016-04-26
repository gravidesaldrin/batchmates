class StaticPagesController < ApplicationController
  layout "shared", only: [:shared]
  def home
  end
  def shared
  end
end
