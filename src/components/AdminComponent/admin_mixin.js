import axios from "axios";
export default {
    data: () => ({
        selectedDepartment: 'all',
        totalOperations: [],
        divisonsName: [],
        totalDepart: [],
        selected: 'all',
    }),
    methods: {
        getDivisions() {
            axios.get("http://www.amock.io/api/kunin-io/v0/divisions?format=names_ids").then((res) => {

                this.divisonsName = res.data.data;
                // console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        },
        getDepartments() {
            axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments").then((res) => {
                let dpt = res.data.data;
                let dptarry = [];
                dpt.forEach(el => {
                    if (el.departments.length > 0) {
                        dptarry = el.departments;
                        console.log(el.departments)
                    }


                });
                this.totalDepart = dptarry;


            }).catch((error) => {
                console.log(error);
            })
        }
    },
    created() {
        this.getDivisions();
        this.getDepartments();
    }

}