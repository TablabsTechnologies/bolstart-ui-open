// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseUrl: "http://ec2-13-233-64-33.ap-south-1.compute.amazonaws.com:8080/BolStart/api/",
  baseUrl: "http://ec2-13-232-141-248.ap-south-1.compute.amazonaws.com:8080/bolstart/api/",
  jobPostBaseUrl:"http://ec2-13-232-141-248.ap-south-1.compute.amazonaws.com:8080/bolstart/",
  //jobPostBaseUrl:"http://localhost:9090/",
  
  //baseUrl: "https://tablabs-dialindia.herokuapp.com/api/",
  defaultPic: "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/profile_avater.png",
  defaultTimlineImage: "url(https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/timline.jpg)"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impactp
 * on performance if an error is thrown.
 */
