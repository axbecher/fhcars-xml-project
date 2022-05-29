xquery version "1.0";

declare namespace h="http://www.w3.org/1999/xhtml";
declare namespace Object="http://127.0.0.1/Object";
 
(:

Masinile care costa peste 5,000,000, tractiune RWD, in ordinea costurilor.

:)
 
let $objects := (doc("FH_Cars.xml")/Object/GameObject)
return <table>
<tr><th>Imagine</th>
        <th>Nume si Model</th>
        <th>Tip model</th>
        <th>Pret in jpc</th>
        <th>Sursa masina</th>
        <th>Statistici stoc</th>
        <th>Rating stoc</th>
        <th>Tractiune</th>
        <th>Scor Viteza</th>
        <th>Scor Control</th>
        <th>Scor Acceleratie</th>
        <th>Scor Lansare</th>
        <th>Scor Franare</th>
        <th>Scor Offroad</th>
        <th>Viteza maxima</th>
        <th>De la 0 la 60 MPH</th>
        <th>De la 0 la 100 MPH</th>
        <th>Forta G</th>
        <th>Sursa masina 1</th>
        <th>Sursa masina 2</th>
        <th>Cai putere</th>
        <th>Greutate in lbs</th></tr>
{
for $x in $objects
where $x/In_Game_Price >= '5,000,000' and $x/Drive_Type = 'RWD'
order by $x/In_Game_Price descending
return <tr><td><img src='{$x/Car_Image}'></img></td>
            <td>{data($x/Name_and_model)}</td>
            <td>{data($x/Model_type)}</td>
            <td>{data($x/In_Game_Price)}</td>
            <td>{data($x/car_source)}</td>
            <td>{data($x/stock_specs)}</td>
            <td>{data($x/Stock_Rating)}</td>
            <td>{data($x/Drive_Type)}</td>
            <td>{data($x/speed)}</td>
            <td>{data($x/handling)}</td>
            <td>{data($x/acceleration)}</td>
            <td>{data($x/launch)}</td>
            <td>{data($x/braking)}</td>
            <td>{data($x/Offroad)}</td>
            <td>{data($x/Top_Speed)}</td>
            <td>{data($x/_0-60_Mph)}</td>
            <td>{data($x/_0-100_Mph)}</td>
            <td>{data($x/g-force)}</td>
            <td>{data($x/car_source_1)}</td>
            <td>{data($x/car_source_2)}</td>
            <td>{data($x/Horse_Power)}</td>
            <td>{data($x/Weight_lbs)}</td></tr>
            
}
</table>