class InternSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :job_title, :company, :location, :summary, :url
end
