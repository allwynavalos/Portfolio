class ProjectsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    projects = Project.all
    render json: projects
  end

  def show
    @project = Project.find(params[:id])
    render json: @project
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project, status: :created
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render json: "DELETED"
  end


  private

  def project_params
    params.require(:project).permit(:admin_id, :project_title, :about, :skills, :github_url, :deploy_url, :image_url)
  end


  def get_project
    @project = Project.find(params[:id])
  end
end
