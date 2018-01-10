package hackathon.api.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@Controller
public class AccountController {

    private final AccountRepository accountRepository;

    @Autowired
    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @CrossOrigin
    @RequestMapping(value = "/account/login", method = RequestMethod.GET)
    public @ResponseBody
    Account information(HttpServletRequest request) {
        String userName = request.getUserPrincipal().getName();
        return accountRepository.findByUsername(userName);
    }

    @CrossOrigin
    @RequestMapping(value = "/account/create", method = RequestMethod.POST)
    public @ResponseBody
    void create(@RequestBody Account account) {
        System.out.println("Save account: " +  account);
        accountRepository.save(account);
    }

}
