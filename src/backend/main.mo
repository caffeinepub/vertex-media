import Array "mo:core/Array";
import List "mo:core/List";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    company : ?Text;
    projectType : Text;
    desiredDate : ?Text;
    budgetRange : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  type NetworkApplication = {
    name : Text;
    email : Text;
    location : Text;
    specialties : Text;
    portfolioLink : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Persistent storage for submissions
  let contactSubmissions = List.empty<ContactSubmission>();
  let networkApplications = List.empty<NetworkApplication>();

  public shared ({ caller }) func submitContact(
    name : Text,
    email : Text,
    company : ?Text,
    projectType : Text,
    desiredDate : ?Text,
    budgetRange : ?Text,
    message : Text,
  ) : async () {
    let newContactSubmission : ContactSubmission = {
      name;
      email;
      company;
      projectType;
      desiredDate;
      budgetRange;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(newContactSubmission);
  };

  public shared ({ caller }) func submitNetworkApplication(
    name : Text,
    email : Text,
    location : Text,
    specialties : Text,
    portfolioLink : Text,
    message : Text,
  ) : async () {
    let newNetworkApplication : NetworkApplication = {
      name;
      email;
      location;
      specialties;
      portfolioLink;
      message;
      timestamp = Time.now();
    };

    networkApplications.add(newNetworkApplication);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  public query ({ caller }) func getNetworkApplications() : async [NetworkApplication] {
    networkApplications.toArray();
  };

  public query ({ caller }) func getContactSubmissionByEmail(email : Text) : async ContactSubmission {
    let contactIter = contactSubmissions.values();
    switch (contactIter.find(func(submission) { submission.email == email })) {
      case (null) { Runtime.trap("Contact Submission does not exist") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getNetworkApplicationByEmail(email : Text) : async NetworkApplication {
    let networkIter = networkApplications.values();
    switch (networkIter.find(func(application) { application.email == email })) {
      case (null) { Runtime.trap("Network Application does not exist") };
      case (?application) { application };
    };
  };
};
