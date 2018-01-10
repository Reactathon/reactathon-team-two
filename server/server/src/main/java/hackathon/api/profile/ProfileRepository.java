package hackathon.api.profile;

import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, Long> {

    public Profile findProfileById(long id);
    public Profile findByFirstName(String firstName);
}
