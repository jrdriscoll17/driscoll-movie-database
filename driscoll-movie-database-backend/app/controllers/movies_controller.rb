class MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def new
    Movie.new(movie_params)
  end

  def create
    movie = Movie.create(movie_params)

    render json: movie.errors, status: 400 and return if !movie.save
    
    render json: movie
  end

  def view
    render json: Movie.find_by_id(params[:id])
  end

  def destroy
    movie = Movie.find_by_id(params[:id])

    render json: movie.errors, status: 500 and return if !movie.destroy

    render json: movie
  end

  private

  def movie_params
    params.permit(:title, :rated, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, :country, :awards, :poster, :metascore, :imdbrating, :boxoffice, :production, :response)
  end
end
