class ArticlesController < ApplicationController
  #Find the article for show, edit, update and destroy actions
  before_action :set_article, only: %i[ show edit update destroy]

  # GET /articles ; /articles.json
  def index
    @articles = Article.all
  end

  # GET /articles/id ; /articles/id.json
  def show

  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # POST /articles ; /articles.json
  def create

  end

  # GET /articles/id/edit
  def edit

  end

  # PATCH/PUT /articles/id ; /articles/id.json
  def update

  end

  # DELETE /articles/id ; /articles/id.json
  def destroy

  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:foto, :fecha, :titulo, :subtitulo, :seccion, :cuerpo)
  end
end
