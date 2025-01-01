function Teacher({teacherId,teacherName})
{
    return (

        <div className="teacher">

            <ol>
                <li>{teacherId}</li>
                <li>{teacherName}</li>
            </ol>

        </div>
    );

}

export default Teacher;