module Api
    module V1
        class InternsController < ApplicationController

            # this will help use the postman for testing puposes
            protect_from_forgery with: :null_session            
            
            # view all the data in db
            def index
                interns = Intern.all
                
                render json: InternSerializer.new(interns).serialized_json
            end

            # particular entry based on id
            def show
                intern = Intern.find_by(id: params[:id])

                render json: InternSerializer.new(intern).serialized_json
            end

            # manually enter a new entry
            def create
                intern = Intern.new(intern_params)

                if intern.save
                    render json: InternSerializer.new(intern).serialized_json
                else
                   render json: { error: intern.errors.messages }, status: 422 
                end
            end

            # update/make changes in an entry in db
            def update
                intern = Intern.find_by(id: params[:id])

                if intern.update(intern_params)
                    render json: InternSerializer.new(intern).serialized_json
                else
                   render json: { error: intern.errors.messages }, status: 422
                end
            end

            # delete data entry using id
            def destroy
                intern = Intern.find_by(id: params[:id])

                if intern.destroy
                    head :no_content
                else
                   render json: { error: intern.errors.messages }, status: 422
                end
            end

            # private variable for data creation
            # fields are white listed for update and entry
            private

            def intern_params
                params.require(:intern).permit(:id, :job_title, :company, :location, :summary, :url)
            end            

        end
    end
end
