const EduExp = (props) => {
    return <div class="timeline-card timeline-card-success card shadow-sm">
        <div class="card-body">
            <div class="h5 mb-1">{props[0]} <span class="text-muted h6">at {props[1]}</span></div>
            <div class="text-muted text-small mb-2">{props[2]}</div>
            <div>{props[3]}</div>
        </div>
  </div>
}
export default EduExp;