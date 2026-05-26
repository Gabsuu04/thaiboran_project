<?php return array (
  'providers' => 
  array (
    0 => 'Laravel\\Sail\\SailServiceProvider',
    1 => 'Laravel\\Tinker\\TinkerServiceProvider',
    2 => 'Carbon\\Laravel\\ServiceProvider',
    3 => 'Termwind\\Laravel\\TermwindServiceProvider',
  ),
  'eager' => 
  array (
    0 => 'Carbon\\Laravel\\ServiceProvider',
    1 => 'Termwind\\Laravel\\TermwindServiceProvider',
  ),
  'deferred' => 
  array (
    'Laravel\\Sail\\Console\\InstallCommand' => 'Laravel\\Sail\\SailServiceProvider',
    'Laravel\\Sail\\Console\\PublishCommand' => 'Laravel\\Sail\\SailServiceProvider',
    'command.tinker' => 'Laravel\\Tinker\\TinkerServiceProvider',
  ),
  'when' => 
  array (
    'Laravel\\Sail\\SailServiceProvider' => 
    array (
    ),
    'Laravel\\Tinker\\TinkerServiceProvider' => 
    array (
    ),
  ),
);