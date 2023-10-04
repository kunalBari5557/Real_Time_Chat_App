import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { UserAddSchema } from "../../ValidationSchema";
import ReactSelect from 'react-select';
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../Redux/features/group";
import { useSelector } from 'react-redux';


const colourStyles = {
    control: (styles: any) => ({
        ...styles,
        border: '1px solid #bfc9d4',
        boxShadow: '#000 !important',
        borderRadius: '6px',
        padding: '4px',
        '&:hover': {
            border: '1px solid #bfc9d4',
        }
    }),
    multiValue: (styles: any) => {
        return {
            ...styles,
            backgroundColor: "#606060",
        };
    },
    multiValueLabel: (styles: any) => ({
        ...styles,
        color: "#fff",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
        ...styles,
        color: "#000",
        '& > svg': {
            backgroundColor: "#fff",
            borderRadius: '10px',
            marginLeft: '2px',
            marginRight: '2px',
        },
        ':hover': {
            backgroundColor: data.color,
            color: data.color,
        },
    }),
    option: (styles: any, { data }: any) => {
        return {
            ...styles,
            backgroundColor: 'white',
            color: '#000',
            ':hover': {
                backgroundColor: '#f5f5f5',
            },
        };
    },
};

interface Users {
    name: string,
    groupId: string,
}

const UserAdd = () => {
    const [initialValues] = useState<Users>({ name: "", groupId: "" })

    const AddUser = useFormik({
        initialValues,
        validationSchema: UserAddSchema,

        onSubmit: (values: Users, action: any) => {

            axios.post(`${process.env.REACT_APP_URL}/user/add`, values)
                .then(res => {
                    localStorage.setItem('groupId', res.data.resp.groupId)
                    localStorage.setItem('userId', res.data.resp._id)

                    if (res.status === 200) {
                        toast.success(res.data.msg)
                    }
                })
                .catch(err => {
                    toast.error(err.response.data.msg)
                });
        }

    })

    const dispatch = useDispatch();
    const data = useSelector((state: any) => state?.groupState?.groups);
    const [userGroup, setGroup] = useState(data);
    console.log(userGroup)

    useEffect(() => {
        dispatch(fetchUsers() as any);
    }, [dispatch]);


    useEffect(() => {
        setGroup(data);
    }, [data]);


    return (
        <>
            <div className='w-100'>
                <div className="breadcrumb-two mb-3 d-flex justify-content-between" >
                    <ul className="breadcrumb">
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                        <li className="active">
                            <a href="##">
                                <h5 className='mb-0 text-white'>Add Group</h5>
                            </a>
                        </li>
                        <li><a href="##">.</a></li>
                    </ul>
                </div>

                <div className="statbox widget box box-shadow">
                    <div className="widget-content widget-content-area p-0 box-shadow-none">

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <form onSubmit={AddUser.handleSubmit}>

                                    <div className="form-group">
                                        <label>Groups</label>
                                        <ReactSelect
                                            options={userGroup?.groups?.map((item: any) => { return { _id: item._id, label: item.name, value: item._id } })}
                                            isClearable={false}
                                            styles={colourStyles}
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                            placeholder="Select Group"
                                            name="groupId"
                                            onChange={(e: any) => AddUser.setFieldValue('groupId', e?.value)}

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter Name"
                                            value={AddUser.values.name}
                                            onChange={AddUser.handleChange}
                                            onBlur={AddUser.handleBlur}
                                            name="name"
                                        />
                                    </div>
                                    {AddUser.errors.name && AddUser.touched.name ? (
                                        <h6 className='text-danger mt-2 ml-1'>{AddUser.errors.name}</h6>
                                    ) : null}


                                    <div className="form-group mb-1">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default UserAdd