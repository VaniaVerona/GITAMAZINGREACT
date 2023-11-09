
function Formulario() {

  return (
<div className="container py-5">
<div className="row justify-content-center">
  <div className="col-md-8">
    <form>
      <div className="form-group row ">
        <label htmlFor="exampleInputName1" className="col-sm-3 col-form-label text-white text-end"><strong>Name:</strong></label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name" />
        </div>
      </div>
      <div className="form-group row my-3">
        <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label text-white text-end"><strong>Email address:</strong></label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
      </div>
      <div className="form-group row my-3">
        <label htmlFor="exampleInputMessage1" className="col-sm-3 col-form-label text-white text-end"><strong>Message:</strong></label>
        <div className="col-sm-9">
          <textarea className="form-control" id="exampleInputMessage1" rows={3} defaultValue={""} placeholder="Enter your message"  />
        </div>
      </div>
      <div className="form-group row ">
        <div className="col-sm-9 offset-sm-3 text-end">
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
  
  )
}
    export default Formulario