

export default function Validateinfo(values) {
          let errors = {}

          if(!values.firstName) {
                    errors.firstName = "A name is required"
          }

          //Email
          if(!values.email){
                    errors.email = "Email is required"
                    // regex used to validate email
          } else if(!/\S+@\S+\.\S+/.test(values.email)) {
                    errors.email = "Email address is invalid"
          }

          if(!values.comments) {
                    errors.comments = 'Comments is required'
          }

          return errors; 
}

