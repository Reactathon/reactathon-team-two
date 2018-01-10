package hackathon.api;

import hackathon.api.account.Account;
import hackathon.api.account.AccountRepository;
import hackathon.api.profile.Profile;
import hackathon.api.profile.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(final AccountRepository accountRepository, final ProfileRepository profileRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... arg0) throws Exception {
                Account account = accountRepository.findByUsername("jonah");

                if(account == null) {
                    accountRepository.save(new Account("jonah", "password"));
                }

                Profile profile = profileRepository.findByFirstName("Jane");
                if(profile == null) {
                    Profile dummyProfile = new Profile();
                    dummyProfile.setFirstName("Jane");
                    dummyProfile.setLastName("Smith");
                    dummyProfile.setEmail("Jane.Smith@jonahgroup.com");
                    profileRepository.save(dummyProfile);
                }

            }
        };
    }
}


@Configuration
class WebSecurityConfiguration extends GlobalAuthenticationConfigurerAdapter {

    @Autowired
    AccountRepository accountRepository;

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService());
    }

    @Bean
    UserDetailsService userDetailsService() {
        return new UserDetailsService() {

            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                Account account = accountRepository.findByUsername(username);
                if (account != null) {
                    return new User(account.getUsername(), account.getPassword(), true, true, true, true,
                            AuthorityUtils.createAuthorityList("USER"));
                } else {
                    throw new UsernameNotFoundException("could not find the user '"
                            + username + "'");
                }
            }

        };
    }
}

@EnableWebSecurity
@Configuration
@Order(1)
class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and().antMatcher("/account/login").
                httpBasic().and().csrf().disable()
                .authorizeRequests()
                .antMatchers("/account/login").authenticated();
    }

}

@EnableWebSecurity
@Configuration
@Order(2)
class NonSecuureWebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().headers().frameOptions().disable();
    }
}

@Configuration
@EnableWebMvc
class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins( "http://localhost:3000" );
        registry.addMapping("/**").allowedOrigins( "*" );
    }
}
