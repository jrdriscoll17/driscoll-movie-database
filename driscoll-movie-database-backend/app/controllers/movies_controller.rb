class MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def new; end
  def create; end
  def view; end
  def delete; end

  private

  def movie_params
    params.permit(:title, :rated, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, :country, :awards, :poster, :metascore, :imdbrating, :boxoffice, :production, :response)
  end
end
