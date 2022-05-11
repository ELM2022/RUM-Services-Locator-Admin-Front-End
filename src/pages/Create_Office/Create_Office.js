import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { officeCreateHandler } from '../../handlers/officeHandler';
import { getAllCategoriesHandler, addCategoryHandler, addCategoryMembershipHandler } from '../../handlers/categoriesHandler';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import Navbar from "../../components/Navbar";
import Home from "../../Home";

const Create_Office = () => {

    let navigate = useNavigate();

    const animatedComponents = makeAnimated();

    const [officeName, setOfficeName] = useState("");
    const [officeDescription, setOfficeDescription] = useState("");
    const [officeSchedule, setOfficeSchedule] = useState("");
    const [officeLatitude, setOfficeLatitude] = useState();
    const [officeLongitude, setOfficeLongitude] = useState();
    const [officeEntranceLatitude, setOfficeEntranceLatitude] = useState();
    const [officeEntranceLongitude, setOfficeEntranceLongitude] = useState();
    const [officeRouteInstructions, setOfficeRouteInstructions] = useState("");
    const [officeSearchDescription, setOfficeSearchDescription] = useState("")
    const [officeFloorNumber, setOfficeFloorNumber] = useState();
    const [officeRoomCode, setOfficeRoomCode] = useState("");
    const [officeEmail, setOfficeEmail] = useState("");
    const [officePhoneNumber, setOfficePhoneNumber] = useState("");
    const [officeExtensionNumber, setOfficeExtensionNumber] = useState("");
    const [officeWebsite, setOfficeWebsite] = useState("");

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [newCategories, setNewCategories] = useState([]);

    const handleSave = (e) => {
        e.preventDefault();

        try {
            const new_office = {
                office_name: officeName,
                office_description: officeDescription,
                office_schedule: officeSchedule,
                office_latitude: officeLatitude,
                office_longitude: officeLongitude,
                office_entrance_latitude: officeEntranceLatitude,
                office_entrance_longitude: officeEntranceLongitude,
                office_route_instructions: officeRouteInstructions,
                office_search_description: officeSearchDescription,
                office_floor_number: officeFloorNumber,
                office_room_code: officeRoomCode,
                office_email: officeEmail,
                office_phone_number: officePhoneNumber,
                office_extension_number: officeExtensionNumber,
                office_website: officeWebsite
            }

            if (newCategories.length > 0) {
                newCategories.map((category_name) => {
                    const category = {category_name};
                    addCategoryHandler(category).then((res) => {
                        if (res.status === 201) {
                            selectedCategories.push(res.data.result.insertId);
                        }
                        else {
                            console.log(res);
                        }
                    });
                });
            }
    
            officeCreateHandler(new_office).then((res) => {
                if (res.status === 201) {
                    const new_office_id = res.data.result.insertId;
                    const membership = {
                        office_id: new_office_id,
                        categories: selectedCategories
                    }

                    addCategoryMembershipHandler(membership).then((response) => {
                        if (response.status === 201) {
                            navigate(`/Active_Directory`, { replace: true });
                        }
                        else {
                            console.log(res);
                        }
                    });
                }
                else {
                    console.log(res);
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCategoriesHandler().then((res) => {
            const result = [];
            res.data.data.categories.map((category) => {
                result.push({
                    label: category.category_name,
                    value: category.category_id
                });
            });
            setCategories(result);
        });
    },[]);

    function categorySelection(e) {
        const selection = [];
        const created = [];
        e.map((option) => {
            if (typeof option.value !== 'string') {
                selection.push(option.value);
            } else {
                created.push(option.label);
            }
        });
        setSelectedCategories(selection);

        if (created.length > 0) {
            setNewCategories(created);
        }
    }

    function renderTableHeader() {
        return(
            <tr>
                <th>Office Name</th>
                <th>Office Description</th>
                <th>Office Schedule</th>
                <th>Office Latitude</th>
                <th>Office Longitude</th>
                <th>Office Entrance Latitude</th>
                <th>Office Entrance Longitude</th>
                <th>Office Route Instructions</th>
                <th>Office Search Description</th>
                <th>Office Floor Number</th>
                <th>Office Room Code</th>
                <th>Office Email</th>
                <th>Office Phone Number</th>
                <th>Office Extension Number</th>
                <th>Office Website</th>
            </tr>
        )
    }

    function renderEditableTableData() {
        return (
            <tr>
                <td><input type='text' value={officeName} onChange={(e) => setOfficeName(e.target.value)}></input></td>
                <td><input type='text' value={officeDescription} onChange={(e) => setOfficeDescription(e.target.value)}></input></td>
                <td><input type='text' value={officeSchedule} onChange={(e) => setOfficeSchedule(e.target.value)}></input></td>
                <td><input type='text' value={officeLatitude} onChange={(e) => setOfficeLatitude(e.target.value)}></input></td>
                <td><input type='text' value={officeLongitude} onChange={(e) => setOfficeLongitude(e.target.value)}></input></td>
                <td><input type='text' value={officeEntranceLatitude} onChange={(e) => setOfficeEntranceLatitude(e.target.value)}></input></td>
                <td><input type='text' value={officeEntranceLongitude} onChange={(e) => setOfficeEntranceLongitude(e.target.value)}></input></td>
                <td><input type='text' value={officeRouteInstructions} onChange={(e) => setOfficeRouteInstructions(e.target.value)}></input></td>
                <td><input type='text' value={officeSearchDescription} onChange={(e) => setOfficeSearchDescription(e.target.value)}></input></td>
                <td><input type='text' value={officeFloorNumber} onChange={(e) => setOfficeFloorNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeRoomCode} onChange={(e) => setOfficeRoomCode(e.target.value)}></input></td>
                <td><input type='text' value={officeEmail} onChange={(e) => setOfficeEmail(e.target.value)}></input></td>
                <td><input type='text' value={officePhoneNumber} onChange={(e) => setOfficePhoneNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeExtensionNumber} onChange={(e) => setOfficeExtensionNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeWebsite} onChange={(e) => setOfficeWebsite(e.target.value)}></input></td>
            </tr>
        )
    }

    function renderDropdown() {
        return(
            <div class="container">
                <div class="row">
                    <CreatableSelect 
                        options={categories} 
                        components={animatedComponents} 
                        isMulti 
                        isSearchable 
                        closeMenuOnSelect={false} 
                        onChange={(e) => categorySelection(e)}
                    />
                </div>
            </div>
        )
    }
    
    function render() {
        return(
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                    <h1 id='title'>Crear Oficina</h1>
                    <div id="office_table_padding" class="table-responsive">
                        <table id='table_information'>
                            <tbody>
                                {renderTableHeader()}
                                {renderEditableTableData()}
                            </tbody>
                        </table>
                    </div>
                    {renderDropdown()}
                    <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Save</button>
                    <a href="/Active_Directory">
                        <button class='btn btn-danger btn-block'>Cancel</button>
                    </a>
                </div></>
        )
    }

    return (
        render()
    )
}

export default Create_Office;


