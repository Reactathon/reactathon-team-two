package hackathon.api.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

//Ideally this would be named 'ProfileController' but that conflicts with Spring

@Controller
public class ApplicationProfileController {

    private final ProfileRepository profileRepository;

    @Autowired
    public ApplicationProfileController(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }


    @CrossOrigin
    @RequestMapping(value = "/profile/{profileId}", method = RequestMethod.GET)
    public
    @ResponseBody
    Profile information(@PathVariable long profileId) {
        return profileRepository.findProfileById(profileId);
    }

    @CrossOrigin
    @RequestMapping(value = "/profile/", method = RequestMethod.POST)
    public
    @ResponseBody
    Profile create(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }

    @CrossOrigin
    @RequestMapping(value = "/profile/{profileId}", method = RequestMethod.PUT)
    public
    @ResponseBody
    Profile create(@RequestBody Profile profile, @PathVariable long profileId) {
        Profile currentProfile = profileRepository.findProfileById(profileId);
        currentProfile.setEmail(profile.getEmail());
        currentProfile.setFirstName(profile.getFirstName());
        currentProfile.setLastName(profile.getLastName());
        return profileRepository.save(currentProfile);
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles/", method = RequestMethod.GET)
    public
    @ResponseBody
    Iterable<Profile> create() {
        return profileRepository.findAll();
    }


}
